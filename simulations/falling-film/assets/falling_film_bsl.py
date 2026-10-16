from manim import *
import numpy as np

class FallingFilmFlowBSL(Scene):
    def construct(self):
        # 1. Title: BSL Standard Falling Film Flow
        title = Title("Flow of a Falling Film (BSL Ch. 2.2)", color=BLUE_C).scale(0.85)
        self.play(Write(title))
        
        # Geometry constants
        wall_length = 8
        film_thickness = 1.5
        
        # Base horizontal plate geometry (Flow: Right, Wall: Bottom)
        wall = Line(LEFT * wall_length / 2, RIGHT * wall_length / 2, color=GRAY, stroke_width=10)
        surface = Line(LEFT * wall_length / 2 + UP * film_thickness, RIGHT * wall_length / 2 + UP * film_thickness, color=BLUE_B, stroke_width=3)
        film = Rectangle(width=wall_length, height=film_thickness, stroke_width=0, fill_color=BLUE_E, fill_opacity=0.4)
        film.move_to(UP * film_thickness / 2)
        
        # BSL Standard Coordinate System:
        # z-axis: Flow direction along the plate (pointing right)
        # x-axis: Normal depth into fluid (pointing down from surface x=0 to wall x=delta)
        z_origin = LEFT * 3.0 + UP * film_thickness
        z_axis = Arrow(z_origin, z_origin + RIGHT * 1.5, color=GREEN_B, stroke_width=4, max_tip_length_to_length_ratio=0.15, buff=0)
        z_label = MathTex("z", color=GREEN_B).scale(0.75).next_to(z_axis.get_end(), UP * 0.2 + RIGHT * 0.1)
        
        x_axis = Arrow(z_origin, z_origin + DOWN * film_thickness, color=GREEN_B, stroke_width=4, max_tip_length_to_length_ratio=0.15, buff=0)
        x_label = MathTex("x", color=GREEN_B).scale(0.75).next_to(x_axis.get_end(), DOWN * 0.1 + RIGHT * 0.2)
        
        # Profile dashed baseline
        profile_axis = DashedLine(LEFT * 1.5, LEFT * 1.5 + UP * film_thickness, color=GRAY_B, stroke_width=1.5)
        
        # Film thickness delta indicator
        delta_arrow = DoubleArrow(LEFT * 2.2, LEFT * 2.2 + UP * film_thickness, color=ORANGE, stroke_width=3, buff=0)
        delta_label = MathTex(r"\delta", color=ORANGE).scale(0.75).next_to(delta_arrow.get_center(), LEFT, buff=0.1)
        
        unrotated_group = VGroup(wall, film, surface, z_axis, z_label, x_axis, x_label, profile_axis, delta_arrow, delta_label)
        
        # Tilt apparatus by angle beta = 45 deg
        beta_angle = 45 * DEGREES
        setup_group = VGroup(unrotated_group)
        setup_group.rotate(-beta_angle, about_point=ORIGIN)
        setup_group.scale(0.75, about_point=ORIGIN)
        center_offset = LEFT * 3.8 + DOWN * 0.6
        setup_group.shift(center_offset)
        
        # 1.1 Fluid Flow Particle Inflow Animation
        self.play(Create(wall), run_time=0.7)
        
        particles = VGroup()
        num_particles = 40
        np.random.seed(42)
        
        for _ in range(num_particles):
            # y_val from 0.05 to film_thickness - 0.05
            y_val = np.random.uniform(0.05, film_thickness - 0.05)
            # In BSL: x = depth from surface = film_thickness - y_val
            x_val_depth = film_thickness - y_val
            v = 4.5 * (1.0 - (x_val_depth / film_thickness)**2)
            
            s_val = np.random.uniform(-6.0, 0.0)
            start_pos = LEFT * wall_length / 2 + RIGHT * (s_val + wall_length / 2) + UP * y_val
            
            dot = Dot(point=start_pos, radius=0.045, color=BLUE_A, fill_opacity=0.65)
            dot.v = v
            particles.add(dot)
            
        particles.rotate(-beta_angle, about_point=ORIGIN)
        particles.scale(0.75, about_point=ORIGIN)
        particles.shift(center_offset)
        
        flow_dir = np.cos(-beta_angle) * RIGHT + np.sin(-beta_angle) * UP
        
        def update_particle(p, dt):
            p.shift(flow_dir * p.v * dt)
            rel_pos = p.get_center() - center_offset
            proj_dist = np.dot(rel_pos, flow_dir)
            if proj_dist > 3.5:
                p.shift(-flow_dir * 7.0)
                
        for p in particles:
            p.add_updater(update_particle)
            
        self.play(FadeIn(particles, run_time=0.4))
        self.wait(1.2)
        
        self.play(
            FadeIn(film, shift=flow_dir * 1.5, run_time=1.5),
            Create(surface, run_time=1.5),
            run_time=1.8
        )
        
        for p in particles:
            p.remove_updater(update_particle)
        self.play(FadeOut(particles, run_time=0.4))
        
        # Coordinates and thickness
        self.play(Create(z_axis), Write(z_label), Create(x_axis), Write(x_label), run_time=1.0)
        self.play(Create(delta_arrow), Write(delta_label), run_time=0.7)
        
        # Gravity vector g
        g_start = setup_group.get_center() + UP * 2.1 + RIGHT * 0.4
        g_vector = Arrow(g_start, g_start + DOWN * 1.1, color=YELLOW, stroke_width=4, buff=0)
        g_label = MathTex(r"\mathbf{g}").scale(0.8).next_to(g_vector, RIGHT, buff=0.1)
        self.play(GrowArrow(g_vector), Write(g_label), run_time=0.8)
        
        # Inclination angle beta
        p_ref = wall.point_from_proportion(0.2)
        vertical_line = DashedLine(p_ref, p_ref + DOWN * 1.1, color=GRAY, stroke_width=1.5)
        beta_arc = Arc(radius=0.55, start_angle=-90 * DEGREES, angle=45 * DEGREES, arc_center=p_ref, color=YELLOW_C, stroke_width=2.5)
        beta_text = MathTex(r"\beta", color=YELLOW_C).scale(0.7).move_to(p_ref + DOWN * 0.75 + RIGHT * 0.3)
        self.play(Create(vertical_line), Create(beta_arc), Write(beta_text), run_time=1.0)
        self.wait(1.0)
        
        # ==========================================
        # 2. STEP-BY-STEP DERIVATION (Right Panel)
        # ==========================================
        # Section Header
        sec_title = Text("Shell Momentum Balance", font_size=24, color=YELLOW).to_edge(RIGHT, buff=1.2).shift(UP * 2.2)
        self.play(Write(sec_title), run_time=0.8)
        
        # Step 1: Force Balance Equation on Shell of Thickness Delta x
        # Gravity driving force + Shear force at x - Shear force at x+Delta x = 0
        eq1 = MathTex(
            r"(\rho L W \Delta x) g \cos\beta",
            r"+",
            r"(L W \cdot \tau_{xz})|_{x}",
            r"-",
            r"(L W \cdot \tau_{xz})|_{x+\Delta x}",
            r"=",
            r"0"
        ).scale(0.50).next_to(sec_title, DOWN, buff=0.4).to_edge(RIGHT, buff=0.8)
        
        self.play(Write(eq1), run_time=1.8)
        self.wait(1.0)
        
        # Step 2: Divide by LW Delta x and take limit Delta x -> 0
        eq2 = MathTex(
            r"\frac{\tau_{xz}|_{x+\Delta x} - \tau_{xz}|_{x}}{\Delta x}",
            r"=",
            r"\rho g \cos\beta"
        ).scale(0.52).next_to(eq1, DOWN, buff=0.35).align_to(eq1, LEFT)
        
        self.play(TransformFromCopy(eq1, eq2), run_time=1.2)
        self.wait(0.8)
        
        limit_label = Text("Limit as Δx → 0:", font_size=18, color=GRAY_A).next_to(eq2, DOWN, buff=0.35).align_to(eq2, LEFT)
        eq3 = MathTex(r"\frac{d\tau_{xz}}{dx} =", r"\rho g \cos\beta").scale(0.58).next_to(limit_label, RIGHT, buff=0.25)
        
        self.play(Write(limit_label), run_time=0.5)
        self.play(TransformFromCopy(eq2, eq3), run_time=1.0)
        self.wait(1.5)
        
        # Clean screen for Integration and Boundary Conditions
        self.play(
            FadeOut(sec_title),
            FadeOut(eq1),
            FadeOut(eq2),
            FadeOut(limit_label),
            eq3.animate.scale(0.52 / 0.58).to_edge(RIGHT, buff=1.2).shift(UP * 2.2),
            run_time=0.8
        )
        
        # Step 3: Boundary Condition 1 at Free Surface (x = 0)
        bc1_box = VGroup(
            Text("BC 1 (Free Surface):", font_size=18, color=YELLOW_B),
            MathTex(r"x = 0 \implies \tau_{xz} = 0", color=YELLOW_B).scale(0.50)
        ).arrange(RIGHT, buff=0.2).next_to(eq3, DOWN, buff=0.3).align_to(eq3, LEFT)
        
        tau_sol = MathTex(
            r"\tau_{xz}(x) =",
            r"\rho g \cos\beta \cdot x"
        ).scale(0.55).next_to(bc1_box, DOWN, buff=0.3).align_to(eq3, LEFT)
        
        self.play(Write(bc1_box), run_time=1.0)
        self.play(Write(tau_sol), run_time=1.2)
        self.wait(1.2)
        
        # Step 4: Substitute Newton's Law of Viscosity
        newton_law = MathTex(
            r"\tau_{xz} = -\mu \frac{dv_z}{dx}"
        ).scale(0.52).next_to(tau_sol, DOWN, buff=0.35).align_to(eq3, LEFT)
        
        dv_eq = MathTex(
            r"\frac{dv_z}{dx} = -\frac{\rho g \cos\beta}{\mu} x"
        ).scale(0.54).next_to(newton_law, DOWN, buff=0.3).align_to(eq3, LEFT)
        
        self.play(Write(newton_law), run_time=0.9)
        self.play(TransformFromCopy(VGroup(tau_sol, newton_law), dv_eq), run_time=1.2)
        self.wait(1.2)
        
        # Step 5: Boundary Condition 2 at Solid Wall (x = delta)
        self.play(
            FadeOut(bc1_box),
            FadeOut(tau_sol),
            FadeOut(newton_law),
            dv_eq.animate.next_to(eq3, DOWN, buff=0.35).align_to(eq3, LEFT),
            run_time=0.8
        )
        
        bc2_box = VGroup(
            Text("BC 2 (Solid Wall - No slip):", font_size=18, color=ORANGE),
            MathTex(r"x = \delta \implies v_z = 0", color=ORANGE).scale(0.50)
        ).arrange(RIGHT, buff=0.2).next_to(dv_eq, DOWN, buff=0.35).align_to(eq3, LEFT)
        
        # Final Parabolic Velocity Profile Equation
        vz_final = MathTex(
            r"v_z(x) =",
            r"\frac{\rho g \delta^2 \cos\beta}{2\mu}",
            r"\left[ 1 - \left(\frac{x}{\delta}\right)^2 \right]"
        ).scale(0.58).next_to(bc2_box, DOWN, buff=0.4).align_to(eq3, LEFT)
        
        # Golden highlight box around final solution
        box = SurroundingRectangle(vz_final, color=YELLOW, buff=0.15, stroke_width=1.5)
        
        self.play(Write(bc2_box), run_time=1.0)
        self.play(Write(vz_final), Create(box), run_time=1.6)
        self.wait(1.5)
        
        # ==========================================
        # 3. VELOCITY VECTOR PROFILE ANIMATION
        # ==========================================
        arrow_group = VGroup()
        num_arrows = 9
        for i in range(num_arrows):
            y = i * film_thickness / (num_arrows - 1)
            # x is depth from surface (y=film_thickness is surface, y=0 is wall)
            x_depth = film_thickness - y
            v_len = 2.2 * (1.0 - (x_depth / film_thickness)**2)
            
            if v_len > 0.05:
                start_p = LEFT * 1.5 + UP * y
                end_p = start_p + RIGHT * v_len
                arr = Arrow(start_p, end_p, buff=0, color=RED_A, stroke_width=4, max_tip_length_to_length_ratio=0.15)
                arrow_group.add(arr)
                
        arrow_group.rotate(-beta_angle, about_point=ORIGIN)
        arrow_group.scale(0.75, about_point=ORIGIN)
        arrow_group.shift(center_offset)
        
        # Grow parabolic arrows
        self.play(LaggedStart(*[GrowArrow(arr) for arr in arrow_group], lag_ratio=0.08), run_time=1.8)
        
        # Subtle gentle flow pulse
        flow_pulse = [arr.animate(rate_func=there_and_back).shift(flow_dir * 0.35) for arr in arrow_group]
        self.play(*flow_pulse, run_time=1.8)
        self.play(*flow_pulse, run_time=1.8)
        
        self.wait(2.5)
